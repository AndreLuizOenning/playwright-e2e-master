import { Page, expect } from "@playwright/test";

export class DrogaRaiaPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acessarSite() {
    await this.page.goto("https://www.drogaraia.com.br/");
    await expect(this.page).toHaveTitle(/Droga Raia/i);
  }

  async buscarProduto(produto: string) {
    const campoBusca = this.page.getByPlaceholder("Buscar");
    await campoBusca.fill(produto);
    await this.page.keyboard.press("Enter");
  }

  async validarResultados() {
    const resultados = this.page.locator('text=154 resultados encontrados');
    await expect(resultados.first()).toBeVisible();
  }

  async abrirCategoria(nomeCategoria: string) {
    const linkCategoria = this.page.getByRole("link", { name: new RegExp(nomeCategoria, "i") });
    await linkCategoria.first().click();
    await expect(this.page.locator("h1")).toContainText(new RegExp(nomeCategoria, "i"));
  }

  async validarRodape() {
    const footer = this.page.locator("text=A Raia segue as determinações da");
    await expect(footer).toBeVisible();
  }
}
