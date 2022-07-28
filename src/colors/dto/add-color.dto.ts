export class CreateColorDto {
  readonly name: string;
  readonly hex: string;
}

export class UpdateColorDto {
  readonly name?: string;
  readonly hex?: string;
}
