from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/legendary-pokemon', methods=['GET'])
def get_legendary_pokemon():
    legendary_pokemon_list = [
        {
            'id': 144,
            'name': 'Articuno',
            'type': 'Ice/Flying',
            'is_legendary': True
        },
        {
            'id': 145,
            'name': 'Zapdos',
            'type': 'Electric/Flying',
            'is_legendary': True
        },
        {
            'id': 146,
            'name': 'Moltres',
            'type': 'Fire/Flying',
            'is_legendary': True
        }
    ]
    return jsonify(legendary_pokemon_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3004)
