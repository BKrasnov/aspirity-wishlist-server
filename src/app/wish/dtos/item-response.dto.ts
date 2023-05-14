export class ItemResponseDto<T> {
  /** HTTP status code. */
  public success: boolean;

  /** The entity of the item */
  public itemDto: T;

  constructor(itemResponseDto: ItemResponseDto<T>) {
    this.success = itemResponseDto.success;
    this.itemDto = itemResponseDto.itemDto;
  }
}
