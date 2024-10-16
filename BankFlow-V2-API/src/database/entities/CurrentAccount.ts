import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/core";
import {Logger} from "../../utils/Logger";
import {Random} from "../../utils/Random";

@Entity({tableName: "CurrentAccount"})
export class CurrentAccount {

    @PrimaryKey({ type: 'number', columnType: 'int', unsigned: true, autoincrement: true })
    id!: number;

    @Property({type: "text", unique: true})
    uuid: string = Random.generateId();

    @Property({type: "text", unique: true, nullable: true})
    username!: string;

    @Property({type: "text", unique: true, nullable: true})
    firstname!: string;

    @Property({type: "text", unique: true, nullable: true})
    surname!: string;

    @Property({type: "text", unique: true, nullable: true})
    email!: string;

    @Property({type: "text", unique: true, nullable: true})
    password!: string;

    @Property({type: "date"})
    createdAt!: Date;


    //////////////////////////////////////////////////////////// Getter ////////////////////////////////////////////////////////////

    getUuid() {
        return this.uuid;
    }

    getUsername() {
        return this.username;
    }

    getFirstName() {
        return this.firstname;
    }

    getSurname() {
        return this.surname;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getCreatedAt() {
        return this.createdAt;
    }


    //////////////////////////////////////////////////////////// Setter ////////////////////////////////////////////////////////////

    setUuid(uuid: string) {
        this.uuid = uuid;
        return this;
    }

    setUsername(username: string) {
        this.username = username;
        return this;
    }

    setFirstName(firstname: string) {
        this.firstname = firstname;
        return this;
    }

    setSurname(surname: string) {
        this.surname = surname;
        return this;
    }

    setEmail(email: string) {
        this.email = email;
        return this;
    }

    setPassword(password: string) {
        this.password = password;
        return this;
    }


    //////////////////////////////////////////////////////////// Utils ////////////////////////////////////////////////////////////

    async saveUser(em: EntityManager) {
        try {
            await em.persistAndFlush(this);
            return this;
        } catch (e) {
            Logger.error(e);
            return null;
        }
    }

    async deleteUser(em: EntityManager) {
        try {
            await em.removeAndFlush(this);
            return this;
        } catch (e) {
            Logger.error(e);
            return null;
        }
    }

}