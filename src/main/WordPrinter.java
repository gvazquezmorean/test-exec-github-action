import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WordPrinter {
    private static final Logger logger = LoggerFactory.getLogger(WordPrinter.class);

    public static void main(String[] args) {
        List<String> words = Arrays.asList("Hello", "World", "This", "Is", "A", "Test");
        for (String word : words) {
            logger.info(word);
        }
    }
}