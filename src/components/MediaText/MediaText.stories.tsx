import type { Meta, StoryObj } from "@storybook/react";
import MediaText from "./MediaText";

const meta: Meta<typeof MediaText> = {
  title: "Components/MediaText",
  component: MediaText,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo da mídia em text" },
    acceptedAudioExt: {
      description: "Lista de formatos de áudios aceitos na mídia em text",
    },
    acceptedImgExt: {
      description: "Lista de formatos de imagens aceitos na mídia em text",
    },
    acceptedVideoExt: {
      description: "Lista de formatos de vídeos aceitos na mídia em text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MediaText>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <MediaText {...args} />
      </div>
    );
  },
  args: {
    children: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    acceptedAudioExt: ["oga", "mp3", "wav", "ogg"],
    acceptedImgExt: ["jpeg", "jpg", "png", "svg", "gif", "webp"],
    acceptedVideoExt: ["webm", "mp4"],
  },
};

export const Audio: Story = {
  render: (args) => {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <MediaText {...args} />
      </div>
    );
  },
  args: {
    children:
      "https://www.gov.br/gestaodeconteudo/pt-br/showcase/audios/audios-exemplos/todos-campos-preenchidos/file_example_oog_1mg.ogg",
    acceptedAudioExt: ["oga", "mp3", "wav", "ogg"],
    acceptedImgExt: ["jpeg", "jpg", "png", "svg", "gif", "webp"],
    acceptedVideoExt: ["webm", "mp4"],
  },
};

export const Image: Story = {
  render: (args) => {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <MediaText {...args} />
      </div>
    );
  },
  args: {
    children:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg",
    acceptedAudioExt: ["oga", "mp3", "wav", "ogg"],
    acceptedImgExt: ["jpeg", "jpg", "png", "svg", "gif", "webp"],
    acceptedVideoExt: ["webm", "mp4"],
  },
};

export const Video: Story = {
  render: (args) => {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <MediaText {...args} />
      </div>
    );
  },
  args: {
    children:
      "https://cdn.pixabay.com/video/2019/03/08/21844-322234054_small.mp4",
    acceptedAudioExt: ["oga", "mp3", "wav", "ogg"],
    acceptedImgExt: ["jpeg", "jpg", "png", "svg", "gif", "webp"],
    acceptedVideoExt: ["webm", "mp4"],
  },
};
