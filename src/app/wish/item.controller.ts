import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto, UpdateItemDto, ItemResponseDto } from './dtos';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemDto[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  public async getById(@Param('id') id: number): Promise<ItemDto> {
    return this.itemService.findById(id);
  }

  @Post()
  public async create(
    @Body() itemDto: ItemDto,
  ): Promise<ItemResponseDto<ItemDto>> {
    try {
      const createdItemDto = await this.itemService.create(itemDto);
      return new ItemResponseDto({ success: true, itemDto: createdItemDto });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() itemDto: ItemDto,
  ): Promise<ItemResponseDto<UpdateItemDto>> {
    try {
      await this.itemService.update(id, itemDto);
      return new ItemResponseDto({ success: true, itemDto });
    } catch (error) {}
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<string> {
    try {
      await this.itemService.delete(id);
      return 'Item deleted';
    } catch (error) {}
  }

  @Post('add-items')
  public async addItemsFromJsonFile() {
    return this.itemService.addItemsFromJsonFile();
  }
}
