searchData={"content_type":"text/markdown","items":[{"doc":"Provides methods for creating and handling a deck of cards","ref":"Cards.html","title":"Cards","type":"module"},{"doc":"Determines whether a deck contains a given card.","ref":"Cards.html#contains?/2","title":"Cards.contains?/2","type":"function"},{"doc":"iex> deck = Cards.create_deck()\n    iex> Cards.contains?(deck, \"Ace of Spades\")\n    true","ref":"Cards.html#contains?/2-examples","title":"Examples - Cards.contains?/2","type":"function"},{"doc":"Returns a list of string representing a deck of playing cards","ref":"Cards.html#create_deck/0","title":"Cards.create_deck/0","type":"function"},{"doc":"iex(1)> Cards.create_deck\n    [\"Ace of Spades\", \"Two of Spades\", \"Three of Spades\", \"Four of Spades\",\n    \"Five of Spades\", \"Six of Spades\", \"Seven of Spades\", \"Eight of Spades\",\n    \"Nine of Spades\", \"Ten of Spades\", \"Ace of Clubs\", \"Two of Clubs\",\n    \"Three of Clubs\", \"Four of Clubs\", \"Five of Clubs\", \"Six of Clubs\",\n    \"Seven of Clubs\", \"Eight of Clubs\", \"Nine of Clubs\", \"Ten of Clubs\",\n    \"Ace of Hearts\", \"Two of Hearts\",\"Three of Hearts\", \"Four of Hearts\",\n    \"Five of Hearts\", \"Six of Hearts\", \"Seven of Hearts\", \"Eight of Hearts\",\n    \"Nine of Hearts\", \"Ten of Hearts\", \"Ace of Diamonds\", \"Two of Diamonds\",\n    \"Three of Diamonds\", \"Four of Diamonds\", \"Five of Diamonds\", \"Six of Diamonds\",\n    \"Seven of Diamonds\", \"Eight of Diamonds\", \"Nine of Diamonds\", \"Ten of Diamonds\"]","ref":"Cards.html#create_deck/0-examples","title":"Examples - Cards.create_deck/0","type":"function"},{"doc":"","ref":"Cards.html#create_hand/1","title":"Cards.create_hand/1","type":"function"},{"doc":"Divides a deck into a hand and the remainder of the deck.\n  The `hand_size` argument indicates how many cards should\n  be in the hand.","ref":"Cards.html#deal/2","title":"Cards.deal/2","type":"function"},{"doc":"iex> deck = Cards.create_deck()\n    iex> {hand, deck} = Cards.deal(deck, 1)\n    iex> hand\n    [\"Ace of Spades\"]\n    iex> length(deck)\n    39","ref":"Cards.html#deal/2-examples","title":"Examples - Cards.deal/2","type":"function"},{"doc":"Recieves the filename.\n  Converts the binary values to Lists of Strings, and if file is not found\n  an error message is shown.","ref":"Cards.html#load/1","title":"Cards.load/1","type":"function"},{"doc":"iex> Cards.load(\"my_deck\")\n    [\"Ace of Spades\", \"Two of Spades\", \"Three of Spades\", \"Four of Spades\",\n    \"Five of Spades\", \"Six of Spades\", \"Seven of Spades\", \"Eight of Spades\",\n    \"Nine of Spades\", \"Ten of Spades\", \"Ace of Clubs\", \"Two of Clubs\",\n    \"Three of Clubs\", \"Four of Clubs\", \"Five of Clubs\", \"Six of Clubs\",\n    \"Seven of Clubs\", \"Eight of Clubs\", \"Nine of Clubs\", \"Ten of Clubs\",\n    \"Ace of Hearts\", \"Two of Hearts\", \"Three of Hearts\", \"Four of Hearts\",\n    \"Five of Hearts\", \"Six of Hearts\", \"Seven of Hearts\", \"Eight of Hearts\",\n    \"Nine of Hearts\", \"Ten of Hearts\", \"Ace of Diamonds\", \"Two of Diamonds\",\n    \"Three of Diamonds\", \"Four of Diamonds\", \"Five of Diamonds\", \"Six of Diamonds\",\n    \"Seven of Diamonds\", \"Eight of Diamonds\", \"Nine of Diamonds\",\n    \"Ten of Diamonds\"]","ref":"Cards.html#load/1-examples","title":"Examples - Cards.load/1","type":"function"},{"doc":"Recieves a deck of cards and a filename.\n  Saves the cards on the deck inside the file using the erlang `term_to_binary/1`","ref":"Cards.html#save/2","title":"Cards.save/2","type":"function"},{"doc":"iex> deck = Cards.create_deck()\n    iex> Cards.save(deck, \"my_deck\")\n    :ok","ref":"Cards.html#save/2-examples","title":"Examples - Cards.save/2","type":"function"}]}