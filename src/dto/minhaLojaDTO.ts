import {
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class MinhaLojaDto {
  @IsString()
  @IsNotEmpty()
  nomeExibicao: string;

  @IsNumberString()
  @IsInt()
  @Min(1)
  @Max(5)
  tempoCD: number;
}
