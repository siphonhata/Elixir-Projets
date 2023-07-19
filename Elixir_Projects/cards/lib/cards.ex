defmodule Cards do
  @moduledoc """
  Documentation for `Cards`.
  """

  @spec create_deck :: list
  @doc """
  Hello world.

  ## Examples

      iex> Cards.hello()
      :world

  """

  def create_deck do
    values = ["Ace","Two","Three","Four","Five","Six","Seven"]
    suits = ["Spades","Clubs", "Hearts","Diamonds"]

    # cards = for value <- values do
    #   for suit <- suits do
    #     "#{value} of #{suit}"
    #   end
    # end
    # List.flatten(cards)

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  def contains?(deck, card) do
    Enum.member?(deck,card)
  end

  def deal(deck, hand_size) do
    Enum.split(deck, hand_size)
  end

  #Saving Contents to a file
  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write(filename, binary)
  end

  #Reading file contents
  def load(filename) do
    {status, binary} = File.read(filename)
    case status do
      :ok -> :erlang.binary_to_term(binary)
      :error -> "File does not exist";
    end
  end
end
