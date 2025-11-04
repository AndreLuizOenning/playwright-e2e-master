import { test } from "@playwright/test";
import { DrogaRaiaPage } from "../support/pages/drogaRaiaPage";

test.describe("Testes no site Droga Raia", () => {
  let drogaRaiaPage: DrogaRaiaPage;

  test.beforeEach(async ({ page }) => {
    drogaRaiaPage = new DrogaRaiaPage(page);
    await drogaRaiaPage.acessarSite();
  });

  test("CT001 - Deve buscar por 'dipirona' e exibir resultados", async () => {
    await drogaRaiaPage.buscarProduto("dipirona");
    await drogaRaiaPage.validarResultados();
  });

  test("CT002 - Deve abrir categoria 'Vitaminas e Suplementos'", async () => {
    await drogaRaiaPage.abrirCategoria("Perfumes");
  });

  test("CT003 - Deve validar a presença do rodapé", async () => {
    await drogaRaiaPage.validarRodape();
  });
});
