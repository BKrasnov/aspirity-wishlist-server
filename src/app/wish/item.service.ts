import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ItemEntity } from 'src/entities';
import { ItemDto } from './dto/item.dto';

import * as fs from 'fs';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly wishRepository: Repository<ItemEntity>,
  ) {}

  /**
   * Find all item.
   */
  public async findAll(): Promise<ItemDto[]> {
    return await this.wishRepository.find();
  }

  /**
   * Create item.
   * @param itemDto Item dto.
   */
  public async create(itemDto: ItemDto): Promise<void> {
    await this.wishRepository.insert(itemDto);
  }

  /**
   * Update item.
   * @param id Id item dto.
   * @param itemDto ItemDto with new data.
   */
  public async update(id: number, itemDto: ItemDto): Promise<void> {
    await this.wishRepository.update(id, itemDto);
  }

  /**
   * Delete item.
   * @param id Id item dto.
   */
  public async delete(id: number): Promise<void> {
    await this.wishRepository.delete(id);
  }

  public async addItemsFromJsonFile() {
    const path = 'src/app/wish/data/items.json';
    const fileData = fs.readFileSync(path, 'utf8');
    const data: ItemDto[] = JSON.parse(fileData);
    await this.wishRepository.save(data);
  }
}
