<p>
Sie können einen Kompetenz-Check importieren, der von einer anderen Person erstellt wurde. <br />Dazu brauchen Sie die so genannte Checknummer.
</p>
<form class="ui form" method="POST">
    {{ csrf_field() }}
    <div class="inline fields">
        <div class="sixteen wide field">
            <label for="checknumber-import">Checknummer</label>
            <input id="checknumber-import" name="checknumber-import" value=""/>
        </div>
    </div>
</form>