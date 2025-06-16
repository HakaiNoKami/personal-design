import type { ReactNode } from "react";
import type { AvatarStyleProps } from "./styles";
import { AvatarImage, Container } from "./styles";

export interface AvatarProps extends AvatarStyleProps {
  src?: string | any;
  icon?: ReactNode;
}

export const Avatar = ({ src, icon, ...args }: AvatarProps) => {
  return (
    <Container {...args}>
      {src ? <AvatarImage alt="Avatar" src={src} /> : icon}
    </Container>
  );
};

export default Avatar;
