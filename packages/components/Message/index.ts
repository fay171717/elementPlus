import Message from "./methods";
import { withInstallFunction } from "@elementPlus/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";
