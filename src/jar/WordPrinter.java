// File: WordPrinter.java
import java.util.Arrays;
import java.util.List;

public class // File: MANIFEST.MF
Main-Class: WordPrinter {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("Hello", "World", "This", "Is", "A", "Test");
        for (String word : words) {
            System.out.println(word);
        }
    }
}