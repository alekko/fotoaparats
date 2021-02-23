from replit import db

class users_service:
    def __init__(self):
        self.db = db
        self.validate_connection()

    def validate_connection(self):
        if db is None: raise Exception('Nevar pieslēgties datubāzei. Pārbaudiet .env vides mainīgo!')

    def get_users(self):
        return db.get('users', [])

    def add_user(self, new_user):
        existing_users = db.get('users', [])

        new_user['id'] = len(existing_users) + 1

        db['users'] = existing_users + [new_user]

    def delete_user(self, user_id):
        existing_users = db.get('users', [])
        left_users = []

        for user in existing_users:
            if user['id'] != user_id:
                left_users += [user]

        # Reindex left users so ids are unique
        new_index = 1
        for user in left_users:
            user['id'] = new_index
            new_index += 1

        db['users'] = left_users


