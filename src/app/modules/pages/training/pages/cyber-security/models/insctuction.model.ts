/**
 * Модель инструкции.
 */
export interface Insctuction {
  //region Fields

  /**
   * Ссылка на инструкцию.
   */
  readonly fileLink: string;

  /**
   * Название инструкции.
   */
  readonly name: string;

  //endregion
}
