import java.util.Arrays;
import java.util.List;

public class WordPrinter {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("Hello", "World", "This", "Is", "A", "Test");
        for (String word : words) {
            System.out.println(word);
        }
    }
}