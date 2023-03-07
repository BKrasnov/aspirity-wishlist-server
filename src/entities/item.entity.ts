import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type PriorityDto = 'high' | 'medium' | 'low';

/** Item entity. */
@Entity({
  name: 'items',
})
export class ItemEntity {
  /** Wish item id. */
  @PrimaryGeneratedColumn()
  public id: number;

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

  /** Link to wish item. */
  @Column({
    nullable: true,
  })
  public readonly link?: string;

  /** Reference to the picture of the wish item. */
  @Column({
    nullable: true,
  })
  public readonly image_ref?: string;

  constructor(item: Partial<ItemEntity>) {
    if (item) {
      Object.assign(this, item);
      this.id = this.id;
      this.name = this.name;
      this.timestamp = this.timestamp;
      this.priority = this.priority;
      this.description = this.description;
      this.price = this.price;
      this.link = this.link;
      this.image_ref = this.image_ref;
    }
  }
}
