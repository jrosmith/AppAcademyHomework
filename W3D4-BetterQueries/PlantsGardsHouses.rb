# => Create an array of all the seeds within a given house.

# app/models/gardener.rb
class Gardener
  belongs_to(
    :house,
    class_name: "House",
    foreign_key: :house_id,
    primary_key: :id
  )

  has_many(
    :plants,
    class_name: "Gardener",
    foreign_key: :gardener_id,
    primary_key: :id
  )
end


# app/models/plant.rb
class Plant
  belongs_to(
    :gardener,
    class_name: "Gardener",
    foreign_key: :gardener_id,
    primary_key: :id
  )

  has_many(
    :seeds,
    class_name: "Seed",
    foreign_key: :plant_id,
    primary_key: :id
  )

  # => Don't think I need this?
  # has_one(
  #   :house,
  #   through: :gardener,
  #   source: :house
  # )
end



# app/models/seed.rb
class Seed
  belongs_to(
    :plant,
    class_name: "Plant",
    foreign_key: :plant_id,
    primary_key: :id
  )
end


# app/models/house.rb
class House
  has_many(
    :gardeners,
    class_name: "Gardener",
    foreign_key: :house_id,
    primary_key: :id
  )

  has_many(
    :plants,
    through: :gardeners,
    source: :plants
  )

  def n_plus_one_seeds
    plants = self.plants
    seeds = []
    plants.each do |plant|
      seeds << plant.seeds
    end

    seeds
  end

  # => Wrote a has_one method for plants, but I realized that since
  # => it belongs to a gardener, and the gardener belongs to a house,
  # => I don't need that relationship. I think. I believe this is just
  # => 2 queries.
  def better_seeds_query
    plants = self.plants.includes(:seeds)
    seeds_by_house = []

    plants.each do |plant|
      seeds_by_house << [plant.seeds.length]
    end
  end
end
