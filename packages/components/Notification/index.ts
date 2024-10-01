import Notification from "./methods";
import {withInstallFunction} from '@elementPlus/utils'

export const ErNotification = withInstallFunction(Notification, '$notify')

export * from './types'
