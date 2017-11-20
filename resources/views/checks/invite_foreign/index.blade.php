<div class="ui bottom">
    Laden Sie jetzt eine Person dazu ein, Ihren Kompetenzstand einzuschätzen. Bitte füllen Sie alle Formularfelder aus.<br/>
    <br/>
    <form class="ui form" method="POST">
        {{ csrf_field() }}
        <input type="hidden" name="check" value="{{$check->id}}">
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="foreign-invite-salutation" class="four wide field">Anrede</label>
                <select name="foreign-invite-salutation" id="salutation">
                    <option value="Frau">Frau</option>
                    <option value="Herr">Herr</option>
                </select>
            </div>
        </div>
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="foreign-invite-firstname" class="four wide field">Vorname</label>
                <input id="foreign-invite-firstname" name="firstname">
            </div>
        </div>
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="foreign-invite-lastname" class="four wide field">Nachname</label>
                <input id="foreign-invite-lastname" name="lastname">
            </div>
        </div>
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="foreign-invite-email" class="four wide field">E-Mail-Adresse</label>
                <input id="foreign-invite-email" name="email">
            </div>
        </div>
    </form>
</div>
