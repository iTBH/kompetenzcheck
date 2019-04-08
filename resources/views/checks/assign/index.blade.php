<div class="ui top attached tabular menu">
    <a class="item active" data-tab="mail">
        Per Mail zuweisen
    </a>
    <a class="item" data-tab="number">
        Per Nummer zuweisen
    </a>
</div>
<div class="ui bottom attached tab active segment" data-tab="mail">
    Weisen Sie den Check einer Person per E-Mail zu, indem Sie die gewünschte E-Mail-Adresse des Check-Partners bzw. der Check-Partnerin auswählen.<br/>
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
    <div class="text-right">
        <button type="button" class="ui primary button modal-save-btn"><i class="save icon"></i> Check zuweisen</button>
    </div>
</div>
<div class="ui bottom attached tab segment" data-tab="number">
    Weisen Sie den Check einer Person per Checknummer zu, indem Sie die generierte Nummer mit ihrem Check-Partner oder Ihrer Check-Partnerinnen teilen.<br/>
    <br/>
    {{ csrf_field() }}
    <div class="inline fields">
        <div class="sixteen wide field">
            <label for="check-assign-number" class="four wide field">Checknummer</label>
            <input id="check-assign-mail" name="check-assign-mail" value="{{$check->share_key}}" readonly disabled/>
        </div>
    </div>
</div>
