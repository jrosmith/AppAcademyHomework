class LRUCache
  include Enumerable

  def initialize(size)
    @cache = Array.new(4)
  end

  def count
    els = cache.select {|el| !el.nil?}
    els.size
  end

  def add(el)
    (0...cache.length).each do |exisiting_el|
      if !exisiting_el.nil?
        next
      else
        exisiting_el = el
      end
    end

    if cache.include?(el)
      cache.delete(el)
      cache.push(el)
    else
      cache.delete_at(0)
      cache.push(el)
    end

  end

  def show
    cache
  end

  def least_recent
    if cache.include?(nil)

      cache.each_with_index do |el, idx|
        if el.nil?
          next
        else
          return el
        end
      end

    else
      return cache.first
    end

  end

  def most_recent
    if cache.include?(nil)

      cache.each_with_index do |el, idx|
        if el.nil?
          return cache[idx - 1]
        else
          next
        end
      end

    else
      return cache.last
    end

  end

  private
  attr_reader :cache

  def each(&prc)
    i = 0
    while i < cache.count
      prc.call(cache[i])
      i += 1
    end
  end

end
