<div class="ui top attached tabular menu">
    <a class="item active" data-tab="mail">
        Per Mail zuweisen
    </a>
    <a class="item" data-tab="number">
        Per Nummer zuweisen
    </a>
</div>
<div class="ui bottom attached tab active segment" data-tab="mail">
    Check per Mail zuweisen<br/>
    <br/>
    Sie können einer Person einen Kompetenz-Check per Mail zuweisen. Wenn diese Person schon registriert ist, wird der Check in ihren Account importiert.<br/>
    <br/>
    <form class="ui form" method="POST">
        {{ csrf_field() }}
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="check-assign-mail" class="four wide field">E-Mail-Adresse</label>
                {!! Form::select('check-assign-mail', $partners, null); !!}
                <input name="check-id" type="hidden" value="{{$check->id}}">
            </div>
        </div>
    </form>
</div>
<div class="ui bottom attached tab segment" data-tab="number">
    Check per Checknummer zuweisen<br/>
    <br/>
    Sie können Checks mit Personen teilen, in dem Sie Ihnen die Checknummer mitteilen. Der Check kann damit in ein eigenes Account importiert werden.<br/>
    <br/>
    <form class="ui form" method="POST">
        {{ csrf_field() }}
        <div class="inline fields">
            <div class="sixteen wide field">
                <label for="check-assign-number" class="four wide field">Checknummer</label>
                <input id="check-assign-mail" name="check-assign-mail" value="{{$check->share_key}}" readonly disabled/>
            </div>
        </div>
    </form>
</div>
