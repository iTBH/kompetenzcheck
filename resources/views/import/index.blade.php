<p>
    Importieren Sie einen Check, indem Sie die jeweilige Checknummer eingeben.
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