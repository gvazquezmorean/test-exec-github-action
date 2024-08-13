package com.example;

import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WordPrinter {
    private static final Logger logger = LoggerFactory.getLogger(WordPrinter.class);

    public static void main(String[] args) {
        List<String> words = Arrays.asList("Hello", "World", "This", "Is", "A", "Test");
        logger.info("Printing words randomly");
        // log words 10000 times ramdomly
        for (int i = 0; i < 10000; i++) {
            int randomIndex = (int) (Math.random() * words.size());
            logger.info(words.get(randomIndex));
        }
    }
}