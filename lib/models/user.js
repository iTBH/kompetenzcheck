'use strict';

var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var authTypes = ['github', 'twitter', 'facebook', 'google'],
    SALT_WORK_FACTOR = 10;
/**
 * User Schema
 */
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    profession: {
        type: String
        //required: true
    },
    professionlong: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false,
        default: 1
    },
    mailToken: {
        type: String
    },
    hashedPassword: String,
    provider: String,
    salt: String,
    facebook: {},
    twitter: {},
    github: {},
    google: {},
    institution: Schema.Types.ObjectId,
    invitees: [],
    authToken: {
        type: String,
        required: true,
        unique: true
    },
    resetToken: {
        type: String,
        required: true,
        unique: true
    },
    isAuthenticated: {
        type: Boolean,
        required: true
    }
});

/**
 * Virtuals
 */
UserSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

// Basic info to identify the current authenticated user in the app
UserSchema
    .virtual('userInfo')
    .get(function () {
        return {
            'name': this.name,
            'role': this.role,
            'provider': this.provider
        };
    });

// Public profile information
UserSchema
    .virtual('profile')
    .get(function () {
        return {
            'name': this.name,
            'role': this.role
        };
    });

// Token generation
UserSchema
    .virtual('token')
    .get(function () {
        return {mailToken: this.mailToken};
    });

/**
 * Validations
 */
var validatePresenceOf = function (value) {
    return value && value.length;
};

// Validate empty email
UserSchema
    .path('email')
    .validate(function (email) {
        // if you are authenticating by any of the oauth strategies, don't validate
        if (authTypes.indexOf(this.provider) !== -1) return true;
        return email.length;
    }, 'Email cannot be blank');

// Validate empty password
UserSchema
    .path('hashedPassword')
    .validate(function (hashedPassword) {
        // if you are authenticating by any of the oauth strategies, don't validate
        if (authTypes.indexOf(this.provider) !== -1) return true;
        return hashedPassword.length;
    }, 'Password cannot be blank');

// Validate empty profession
//UserSchema
//  .path('profession')
//  .validate(function(profession) {
//    // if you are authenticating by any of the oauth strategies, don't validate
//    if (authTypes.indexOf(this.provider) !== -1) return true;
//    return profession.length;
//  }, 'Der Ausbildungsberuf muss ausgewählt werden.');

/**
 * Plugins
 */
UserSchema.plugin(uniqueValidator, {message: 'Der Wert wird schon verwendet.'});

/**
 * Pre-save hook
 * TODO Berufe nicht hardcoden
 */
UserSchema
    .pre('save', function (next) {
        if (!this.isNew) return next();

        if (!validatePresenceOf(this.hashedPassword) && authTypes.indexOf(this.provider) === -1)
            next(new Error('Invalid password'));
        else

        // Token generieren
        //this.mailToken = this.makeToken();
        //console.log(this.mailToken);

        // Lange Berufsbezeichnung aus Auswahl ermitteln und in die DB schreiben
        //if (!this.professionlong) {
        //    switch ( this.profession ) {
        //        case 'mdp':
        //            this.professionlong = 'Mediengestalter/in Digital/Print';
        //            break;
        //        case 'mbt':
        //            this.professionlong = 'Mediengestalter/in Bild/Ton';
        //            break;
        //        case 'eeg':
        //            this.professionlong = 'Elektroniker/in Gebäude- und Infrastruktursysteme';
        //            break;
        //        case 'amshk':
        //            this.professionlong = 'Anlagenmechaniker/in SHK';
        //            break;
        //        case 'dach':
        //            this.professionlong = 'Dachdecker/in';
        //            break;
        //        case 'mal':
        //            this.professionlong = 'Maler/in und Lackierer/in';
        //            break;
        //        case 'veranst':
        //            this.professionlong = 'Fachkraft für Veranstaltungstechnik';
        //            break;
        //        default:
        //            break;
        //    }
        //}

            next();
    });

/**
 * Methods
 */
UserSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashedPassword;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function () {
        return crypto.randomBytes(16).toString('base64');
    },

    /**
     * Make token
     * Generiert ein Token, dass für die interne Kommunikation
     * vom Ausbilder zum Azubi benötigt wird.
     *
     * @return {String}
     * @api public
     * TODO Prüfen, dass Hash nicht schon einmal vorkommt!
     */
    makeToken: function () {
        return crypto.randomBytes(16).toString('base64').substr(0, 16);
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function (password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
};

mongoose.model('User', UserSchema);
