package enums;

public enum APIResources {
    ADD_PLACE_API("/maps/api/place/add/json"),
    GET_PLACE_API("/maps/api/place/get/json"),
    DELETE_PLACE_API("/maps/api/place/delete/json"),
    UPDATE_PLACE_API("/maps/api/place/update/json");


    private String resource;

    APIResources(String resource) {
        this.resource = resource;
    }

    public String getResource() {
        return resource;
    }
}

