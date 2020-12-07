import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class Part1 {
  public static void main(String args[]) {
    try (FileReader reader = new FileReader("input.txt");
      BufferedReader br = new BufferedReader(reader)) {

      int counter = 0;
      Set<Character> chars = new HashSet<>();

      String line;
      while ((line = br.readLine()) != null) {
        if (line.equals("")) {
          counter += chars.size();
          chars = new HashSet<>();
        } else {
          for (int i = 0; i < line.length(); i++) {
            chars.add(line.charAt(i));
          }
        }
      }
      counter += chars.size();

      System.out.println(counter);
    } catch (IOException e) {
      System.err.format("IOException: %s%n", e);
    }
  }
}
