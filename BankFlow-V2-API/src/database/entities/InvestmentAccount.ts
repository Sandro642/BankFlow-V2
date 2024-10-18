import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {EntityManager} from "@mikro-orm/core";
import {Logger} from "../../utils/Logger";
import {Random} from "../../utils/Random";

@Entity({tableName: "InvestmentAccount"})
export class InvestmentAccount {

    @PrimaryKey({ type: 'number', columnType: 'int', unsigned: true, autoincrement: true })
    id!: number;

    @Property({type: "text", unique: true})
    uuid: string = Random.generateId();

    @Property({type: "text", unique: true, nullable: false})
    owner!: string;

    @Property({type: "text", unique: true, nullable: true})
    co_owner!: string;

    @Property({type: "text", nullable: false})
    investment!: string;

    @Property({type: "date"})
    createdAt!: Date;


    //////////////////////////////////////////////////////////// Getter ////////////////////////////////////////////////////////////

    getUuid() {
        return this.uuid;
    }

    getOwner() {
        return this.owner;
    }

    getCoOwner() {
        return this.co_owner;
    }

    getInvestment() {
        return this.investment;
    }

    getCreatedAt() {
        return this.createdAt;
    }


    //////////////////////////////////////////////////////////// Setter ////////////////////////////////////////////////////////////

    setUuid(uuid: string) {
        this.uuid = uuid;
        return this;
    }

    setOwner(owner: string) {
        this.owner = owner;
        return this;
    }

    setCoOwner(co_owner: string) {
        this.co_owner = co_owner;
        return this;
    }

    setInvestment(investment: string) {
        this.investment = investment;
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