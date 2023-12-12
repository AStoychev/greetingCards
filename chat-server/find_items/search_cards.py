from database import card

all_card = card.find({})

def search_for_item(word):
    saved_items = []
    for card in all_card:
        title = card['title'].lower()
        description = card['description'].lower()
        
        if word in title:
            saved_items.append(card)
        
        if word in description:
            saved_items.append(card)

    return saved_items