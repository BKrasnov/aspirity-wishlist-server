import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ItemEntity } from 'src/entities';
import { ItemDto } from './dtos';
import * as fs from 'fs';
import { PaginationDto, PaginatedResultDto } from '@core/dtos';

const INITIAL_PAGE = 1;
const INITIAL_LIMIT = 5;

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  /**
   * Find all item.
   * @param paginationDto Pagination data to get selection of entities.
   */
  public async findAll(
    paginationDto: PaginationDto,
  ): Promise<PaginatedResultDto<ItemDto>> {
    const page = Number(paginationDto.page) || INITIAL_PAGE;
    const limit = Number(paginationDto.limit) || INITIAL_LIMIT;

    const skippedItems = (page - 1) * limit;
    const totalCount = await this.itemRepository.count();
    const items = await this.itemRepository
      .createQueryBuilder()
      .offset(skippedItems)
      .limit(limit)
      .getMany();

    return {
      totalCount,
      page: page,
      limit: limit,
      data: items,
    };
  }

  /**
   * Find item by id.
   * @param itemId Item id.
   */
  public async findById(itemId: number): Promise<ItemDto> {
    return await this.itemRepository.findOneBy({
      id: itemId,
    });
  }

  /**
   * Create item.
   * @param itemDto Item dto.
   */
  public async create(itemDto: ItemDto): Promise<ItemDto> {
    return await this.itemRepository.save({ ...itemDto });
  }

  /**
   * Update item.
   * @param id Id item dto.
   * @param itemDto ItemDto with new data.
   */
  public async update(id: number, itemDto: ItemDto): Promise<UpdateResult> {
    return await this.itemRepository.update(id, itemDto);
  }

  /**
   * Delete item.
   * @param id Id item dto.
   */
  public async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete(id);
  }

  public async addItemsFromJsonFile() {
    const path = 'src/app/wish/data/items.json';
    const fileData = fs.readFileSync(path, 'utf8');
    const data: ItemDto[] = JSON.parse(fileData);
    await this.itemRepository.save(data);
  }
}
