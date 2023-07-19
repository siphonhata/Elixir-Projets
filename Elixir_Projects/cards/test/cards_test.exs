defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  # test "greets the world" do
  #   assert Cards.hello() == :world
  # end

  test "the truth" do
    assert 1 + 1 == 2
  end

  test "create_deck makes 20 cards" do
    deck_length = length(Cards.create_deck())
    assert deck_length == 52
  end

  test "deal func" do
    deck = Cards.create_deck()
    {hand, deck} = Cards.deal(deck, 1)
    assert hand == ["Ace of Spades"]
  end

  test "shuffling a deck randomizes it" do
    deck = Cards.create_deck()
    refute deck == Cards.shuffle(deck)
    assert deck != Cards.shuffle(deck)
  end
end
