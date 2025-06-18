# 📦 Ligo Design

[![](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)

Uma biblioteca de componentes React/TypeScript com base no design system dos produtos Ligo.

### ✨ Features

- ✅ Componentes acessíveis e responsivos

- 🔧 Tipagem TypeScript completa

- 🎨 Customização via styled-components

- 📚 Documentação com Storybook

- 🌈 Suporte a temas (light/dark mode)

- 🚀 Otimizado para performance

### 📦 Instalação

```bash
npm install personal-design
# ou
yarn add personal-design
```

### 🚀 Uso Básico

```javascript
import { Button, ThemeProvider } from "personal-design";

function App() {
  return (
    <ThemeProvider theme="dark">
      <Button variant="primary">Clique aqui</Button>
    </ThemeProvider>
  );
}
```

### 🔧 Componentes

| Components   | Descrição                                  | Documentação                                                                                        |
| ------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Alert        | Caixa de alerta                            | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-alert--docs)        |
| Avatar       | Área do avatar                             | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-avatar--docs)       |
| Box          | Caixa de divisão de conteúdo               | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-box--docs)          |
| Button       | Botão customizável                         | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-button--docs)       |
| Card         | Cartão informativo                         | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-card--docs)         |
| CardInfo     | Cartão informativo com ações               | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-cardinfo--docs)     |
| Checkbox     | Campo de marcação de caixa                 | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-checkbox--docs)     |
| Chip         | Marcador de texto                          | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-chip--docs)         |
| Collapse     | Campo com alternancia na visibilidade      | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-collapse--docs)     |
| Dialog       | Modal de confirmação                       | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-dialog--docs)       |
| Divisor      | Linha de divisão para conteúdo             | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-divisor--docs)      |
| Dropdonw     | Campo com opções expandível                | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-dropdown--docs)     |
| EmptyList    | Caixa de aviso de lista vazia              | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-emptylist--docs)    |
| Form         | Formulário                                 | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-form--docs)         |
| FormGroup    | Agrupador de campos no formulário          | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-formgroup--docs)    |
| Grid         | Gradiente para controlar responsividade    | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-grid--docs)         |
| IconButton   | Botão com apenas ícone                     | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-iconbutton--docs)   |
| Iframe       | Caixa para iframes externos                | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-iframe--docs)       |
| Input        | Campo de texto com mascaras personalizadas | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-input--docs)        |
| InputFile    | Campo de upload de arquivos                | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-inputfile--docs)    |
| Loading      | Ícone de carregamento animado              | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-loading--docs)      |
| MediaText    | Texto com link embutido                    | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-mediatext--docs)    |
| Modal        | Caixa flutuante responsiva                 | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-modal--docs)        |
| MultiSelect  | Campo de seleção com multiplas opções      | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-multiselect--docs)  |
| Nav          | Campo de navegação                         | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-nav--docs)          |
| OverflowText | Caixa de texto com tamanho limite          | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-overflowtext--docs) |
| PageHeader   | Caixa de informação da página              | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-pageheader--docs)   |
| Pagination   | Paginador de lista                         | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-pagination--docs)   |
| Radio        | Campo de marcação de seleção única         | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-radio--docs)        |
| Range        | Campo de range                             | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-range--docs)        |
| Select       | Campo de seleção única                     | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-select--docs)       |
| Step         | Divisão de conteúdo em abas                | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-step--docs)         |
| Table        | Tabela                                     | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-table--docs)        |
| Tag          | Marcador                                   | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-tag--docs)          |
| Textarea     | Campo de caixa de texto                    | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-textarea--docs)     |
| Time         | Texto com o tempo atual                    | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-time--docs)         |
| Toast        | Aviso flutuante                            | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-toast--docs)        |
| Toggle       | Campo de ativo ou inativo                  | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-toggle--docs)       |
| ToggleGroup  | Agrupador de botões de ativo ou inativo    | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-togglegroup--docs)  |
| Tooltip      | Texto de dica                              | [Ver docs](https://hakainokami.github.io/personal-design/?path=/docs/components-tooltip--docs)      |

### 📚 Documentação Completa

Explore todos os componentes e suas props em nossa [documentação no Storybook](https://hakainokami.github.io/personal-design "documentação no Storybook").
