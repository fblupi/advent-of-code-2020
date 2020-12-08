class BagsManager {
  Map bags = [:]

  void read(String filename) {
    new File(filename).eachLine { line ->
      def name = (line =~ /\w+ \w+/)[0]
      if (!bags[name]) {
        bags[name] = [:]
      }
      (line =~ /(\d+) (\w+ \w+)/).each { result ->
        bags[name][result[2]] = result[1] as int
      }
    }
  }

  Integer getQuantity(String name) {
    def result = 0
    bags[name].each { bag, quantity ->
      result += (quantity + quantity * getQuantity(bag))
    }
    result
  }
}

def bags = new BagsManager()
bags.read('input.txt')
println bags.getQuantity('shiny gold')
