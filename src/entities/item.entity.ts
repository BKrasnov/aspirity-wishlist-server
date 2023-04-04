import { Entity, Column } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

type PriorityDto = 'high' | 'medium' | 'low';

/** Item entity. */
@Entity({ name: 'items' })
export class ItemEntity extends AbstractEntity {
  /** The name of the wish item. */
  @Column()
  public readonly name: string;

  /** Date of creation. */
  @Column({
    default: 0,
  })
  public readonly timestamp: number;

  /** Purchase priority. */
  @Column({
    default: 'medium',
  })
  public readonly priority: PriorityDto;

  /** Description of the wish item. */
  @Column({
    nullable: true,
  })
  public readonly description?: string;

  /** The price of the wish item. */
  @Column({
    nullable: true,
  })
  public readonly price?: number;

  /** Reference to the picture of the wish item. */
  @Column({
    nullable: true,
  })
  public readonly imageRef?: string;

  constructor(item: ItemEntity) {
    super();
    if (item) {
      Object.assign(this, item);
      this.id = this.id;
      this.name = this.name;
      this.timestamp = this.timestamp;
      this.priority = this.priority;
      this.description = this.description;
      this.price = this.price;
      this.imageRef = this.imageRef;
    }
  }
}
