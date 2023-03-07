import {
  IsInt,
  IsNotEmpty,
  Length,
  IsIn,
  IsNumber,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

type PriorityDto = 'high' | 'medium' | 'low';

/** Wish item DTO. */
export class ItemDto {
  /** Wish item id. */
  @IsNotEmpty()
  public readonly id: number;

  /** The name of the wish item. */
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  @Length(0, 20, {
    message: 'The name must have a length between 0 and 20',
  })
  public readonly name: string;

  /** Date of creation. */
  @IsNotEmpty({ message: 'Timestamp field cannot be empty' })
  @IsInt()
  public readonly timestamp: number;

  /** Purchase priority. */
  @IsNotEmpty({ message: 'Priority field cannot be empty' })
  @IsIn(['high', 'medium', 'low'])
  public readonly priority: PriorityDto;

  /** Description of the wish item. */
  @Length(0, 50, {
    message: 'The description must have a length between 0 and 50',
  })
  public readonly description?: string;

  /** The price of the wish item. */
  @IsNumber()
  @Min(0)
  @Max(10_000_000, {
    message: 'The price value must be up to 10 million',
  })
  public readonly price?: number;

  /** Link to wish item. */
  @IsUrl()
  public readonly link?: string;

  /** Reference to the picture of the wish item. */
  @IsUrl()
  public readonly image_ref?: string;
}
