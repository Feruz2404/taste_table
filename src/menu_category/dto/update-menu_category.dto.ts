import { PartialType } from '@nestjs/swagger';
import { CreateMenuCategoryDto } from './create-menu_category.dto';

export class UpdateMenuCategoryDto extends PartialType(CreateMenuCategoryDto) {
    lang_id: string
    name: string;
}
