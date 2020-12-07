import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class Part2 {
  private static int count(Set<Character> chars, Set<Set<Character>> groups) {
    int counter = 0;
    for (Character character: chars) {
      boolean everyone = true;
      for (Set<Character> group: groups) {
        if (!group.contains(character)) {
          everyone = false;
          break;
        }
      }
      if (everyone) {
        counter++;
      }
   }
   return counter;
  }

  public static void main(String args[]) {
    try (FileReader reader = new FileReader("input.txt");
      BufferedReader br = new BufferedReader(reader)) {

      int counter = 0;
      Set<Character> chars = new HashSet<>();
      Set<Set<Character>> groups = new HashSet<>();

      String line;
      while ((line = br.readLine()) != null) {
        if (line.equals("")) {
          counter += count(chars, groups);
          chars = new HashSet<>();
          groups = new HashSet<>();
        } else {
          Set<Character> group = new HashSet<>();
          for (int i = 0; i < line.length(); i++) {
            chars.add(line.charAt(i));
            group.add(line.charAt(i));
          }
          groups.add(group);
        }
      }
      counter += count(chars, groups);

      System.out.println(counter);
    } catch (IOException e) {
      System.err.format("IOException: %s%n", e);
    }
  }
}
