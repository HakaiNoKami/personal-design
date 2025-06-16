import { CircleDownloadIcon, OpenTabIcon } from "assets";
import { validateURL } from "utils";
import { MessageFile, PreviewImg } from "./styles";

export interface MediaTextProps {
  children: string;
  acceptedAudioExt: string[];
  acceptedImgExt: string[];
  acceptedVideoExt: string[];
}

const validFilename = /^[0-9a-zA-Z_-]{3,255}\.([a-zA-Z0-9]{2,5})$/;

export const MediaText = ({ children, ...args }: MediaTextProps) => {
  if (children && validateURL(children)) {
    let details = <p>{children}</p>;

    const paths = children.split("/");
    const filename = paths[paths.length - 1];

    const isFile = validFilename.test(filename);

    if (isFile) {
      const extension = filename.substr(
        filename.lastIndexOf(".") + 1,
        filename.length
      );

      if (args.acceptedAudioExt.includes(extension))
        return <audio src={children} controls />;

      if (args.acceptedVideoExt.includes(extension))
        return <video controls src={children} />;

      details = <p>{filename}</p>;

      if (args.acceptedImgExt.includes(extension))
        details = (
          <PreviewImg>
            <img src={children} alt={filename} />
          </PreviewImg>
        );
    }

    const onOpen = () =>
      window.open(children, "_blank", "noopener=true")?.focus();

    return (
      <MessageFile>
        {details}
        {isFile ? (
          <CircleDownloadIcon onClick={onOpen} />
        ) : (
          <OpenTabIcon onClick={onOpen} />
        )}
      </MessageFile>
    );
  }

  return children ? <p>{children}</p> : <p>&nbsp;</p>;
};

export default MediaText;
