export class Config {
  /**
   * Get configuration values from file
   */
  public static getValuesFromFile(nodeEnvironment) {
    if (
      nodeEnvironment === undefined ||
      nodeEnvironment === null ||
      nodeEnvironment === "development"
    ) {
      return require("../config/config.development.json");
    } else {
      if (nodeEnvironment === "production") {
        return require("../config/config.production.json");
      }
    }
  }

  /**
   * Get COR Configuration
   */
  public static getCORConfig(whitelist) {
    const corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    };
    return corsOptions;
  }
}
