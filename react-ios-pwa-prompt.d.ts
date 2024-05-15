declare module "react-ios-pwa-prompt" {
  import { ComponentType } from "react";

  type PWAPromptProps = {
    copyAddHomeButtonLabel?: string;
    copyBody?: string;
    copyClosePrompt?: string;
    copyShareButtonLabel?: string;
    copyTitle?: string;
    debug?: boolean;
    delay?: number;
    onClose?: () => void;
    permanentlyHideOnDismiss?: boolean;
    promptOnVisit?: number;
    timesToShow?: number;
  };

  const PWAPrompt: ComponentType<PWAPromptProps>;

  export default PWAPrompt;
}
