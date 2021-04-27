package ms.kwon.simple.todolist.vo;

public class Todo {

    private int id;
    private String text;
    private String colorValue;
    private boolean isChecked;

    public Todo() {}

    public Todo(int id, String text, String colorValue) {
        this.id = id;
        this.text = text;
        this.colorValue = colorValue;
        this.isChecked = false;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColorValue() {
        return colorValue;
    }

    public void setColorValue(String colorValue) {
        this.colorValue = colorValue;
    }

    public boolean isChecked() {
        return isChecked;
    }

    public void setChecked(boolean checked) {
        isChecked = checked;
    }
}
