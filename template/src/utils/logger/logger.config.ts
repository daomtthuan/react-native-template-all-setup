import { ConfigureOptions, LogLevel } from 'react-native-file-logger';

/** Logger config. */
const loggerConfig: ConfigureOptions = {
  logLevel: __DEV__ ? LogLevel.Debug : LogLevel.Error,
};

export default loggerConfig;
