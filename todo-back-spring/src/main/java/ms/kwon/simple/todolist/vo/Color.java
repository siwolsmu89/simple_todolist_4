package ms.kwon.simple.todolist.vo;

public class Color {

    private int id;
    private String colorValue;
    private boolean isActive;

    public Color() {}

    public Color(int id, String colorValue) {
        this.id = id;
        this.colorValue = colorValue;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getColorValue() {
        return colorValue;
    }

    public void setColorValue(String colorValue) {
        this.colorValue = colorValue;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
