require 'rspec'
require 'lru_cache'

describe LRUCache do
  subject(:cache) {LRUCache.new(4)}

  describe "#add" do
    it "adds element to cache" do
      cache.add(5)
      expect(cache.include?(5)).to eq(true)
    end

    it "makes added element most recently used if already in cache" do
      cache.add(5)
      cache.add(4)
      cache.add(3)
      cache.add(2)
      cache.add(3)

      expect(cache.most_recent).to eq(3)
    end

    it "removes LRU item if added element not in cache" do
      cache.add(5)
      cache.add(4)
      cache.add(3)
      cache.add(2)
      cache.add(1)

      expect(cache.include?(5)).to be(false)
    end

  end

  describe "#most_recent" do
    it "returns most recently added element to cache" do
      cache.add(5)
      cache.add(4)
      expect(cache.most_recent).to eq(4)
    end
  end

  describe "#least_recent" do
    it "returns oldest member of cache" do
      cache.add(5)
      cache.add(4)
      expect(cache.least_recent).to eq(5)
    end
  end

  describe "#count" do
    it "does not count nil values" do
      expect(cache.count).to eq(0)
    end

    it "returns number of elements currently in cache" do
      cache.add("I walk the line")
      cache.add(5)

      expect(cache.count).to eq(2)
    end

  end



  describe "#show" do
    it "shows the items in the cache, with the LRU item first" do
      cache.add([1,2,3])
      cache.add(5)
      cache.add(-5)
      cache.add({a: 1, b: 2, c: 3})
      cache.add([1,2,3,4])
      cache.add("I walk the line")
      cache.add(:ring_of_fire)
      cache.add("I walk the line")
      cache.add({a: 1, b: 2, c: 3})

      expect(cache.show).to eq([[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}])
    end
  end

end
