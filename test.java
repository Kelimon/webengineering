public sealed class ConfigurationManager{
    private static ConfigurationManager instance;
    private static object syncRoot = new Object();
    
    private ConfigurationManager(){

    }

    public static ConfigurationManager GetInstance{
        get{
            lock(syncRoot){
                if(instance == null){
                    instance = new ConfigurationManager();
                }
            }

            return instance;
        }
    }
}