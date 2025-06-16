import type { LoadingStyleProps } from "./styles";
import { LoadingContainer, LoadingContent } from "./styles";

export interface LoadingProps extends LoadingStyleProps {}

export const Loading = (args: LoadingProps) => {
  return (
    <LoadingContainer {...args}>
      <LoadingContent />
    </LoadingContainer>
  );
};

export default Loading;
