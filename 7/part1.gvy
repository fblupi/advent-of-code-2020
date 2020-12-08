class BagsManager {
  Map bags = [:]

  void read(String filename) {
    new File(filename).eachLine { line ->
      def name = (line =~ /\w+ \w+/)[0]
      if (!bags[name]) {
        bags[name] = []
      }
      (line =~ /\d+ (\w+ \w+)/).each { result ->
        bags[name] << result[1]
      }
    }
  }

  List findContainerBags(String name) {
    def result = []
    def finding = [name]
    def collection = bags.clone()
    collection.remove(name)

    while (true) {
      def finded = []
      collection.each { bag, content ->
        finding.each { goal ->
          if (content.contains(goal)) {
            finded << bag
          }
        }
      }
      finded.unique()
      finded.each { bag ->
        collection.remove(bag)
        result << bag
      }

      if (finded.isEmpty()) {
        break
      }

      finding = finded
    }

    result
  }
}

def bags = new BagsManager()
bags.read('input.txt')
println bags.findContainerBags('shiny gold').size()
