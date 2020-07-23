# noodle class w 4 ingredients initialized
class Noodle
  def initialize(name)
    @ing1 = "flour"
    @ing2 = "eggs"
    @ing3 = "milk"
    @name = name
  end

  def show_recipe
    "This noodle is made with #{@ing1}, #@ing2, and #@ing3."
  end
end
# new instance of Noodle
my_noodle = Noodle.new
p my_noodle.show_recipe


# penne and fusilli inherits from Noodle
# inherits with carrot
class Penne < Noodle
  # add shape as initialize argument
  def initialize(shape)
    # super in child class
    # whatever method super is being called on will call the method of the same name in the parent class
    super()
    @shape = shape
  end

  def show_info
    "#{ @name } is a #{ @shape }-shaped noodle. #{@ing1}"
  end
end

# create new instance of specific noodle
penne_noodle = Penne.new("tube")
# show info vs. show recipe
p penne_noodle.show_info
p penne_noodle.show_recipe

# p: returns in the form of a data type
# puts: new line
# print: no new line
