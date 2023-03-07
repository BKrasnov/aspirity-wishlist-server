import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './dto/item.dto';
import { ItemEntity } from 'src/entities';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemEntity[]> {
    return this.itemService.findAll();
  }

  @Post()
  public async create(@Body() itemDto: ItemDto): Promise<void> {
    this.itemService.create(itemDto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() itemDto: ItemDto,
  ): Promise<void> {
    this.itemService.update(id, itemDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number): Promise<void> {
    this.itemService.delete(id);
  }

  @Post('add-users')
  public async addItemsFromJsonFile() {
    return this.itemService.addItemsFromJsonFile();
  }
}
