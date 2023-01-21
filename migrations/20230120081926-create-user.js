'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "First name is required"
          },
          is: {
            args: /^[a-zA-Z]+$/,
            msg: "First name must be alphabet without space"
          },
          not: {
            args: /[0-9!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
            msg: "First name must not have numeric or special character"
          }
        }
      },
      LastName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Last name is required"
          },
          is: {
            args: /^[a-zA-Z]+$/,
            msg: "Last name must be alphabet without space"
          },
          not: {
            args: /[0-9!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
            msg: "Last name must not have numeric or special character"
          }
        }
      },
      Email: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Email address already in use!'
        },
        validate: {
            isEmail: {
                args: true,
                msg: "Email is not valid"
            },
            notEmpty: {
                args: true,
                msg: "Email is required"
            }
        }
      },
      Phone: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Phone is required"
          },
          is: {
            args: /^[0-9]{10}$/,
            msg: "Phone must be 10 digit"
          },
          not: {
            args: /\s+/,
            msg: "Phone must not have space"
          }
        }
      },
      Password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Password is required"
          },
          len: {
            args: [8, Infinity],
            msg: "Password must be at least 8 characters long"
          },
          is: {
            args: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
            msg: "Password must have at least one special character, one uppercase, one lowercase and one numeric character"
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};